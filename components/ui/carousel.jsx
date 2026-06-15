"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const carouselOptions = React.useMemo(
    () => ({
      align: "start",
      containScroll: "trimSnaps",
      dragFree: false,
      skipSnaps: false,
      dragThreshold: 12,
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    }),
    [orientation, opts]
  );

  const [carouselRef, api] = useEmblaCarousel(carouselOptions, plugins);

  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((emblaApi) => {
    if (!emblaApi) return;

    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(
    (event) => {
      event?.preventDefault?.();
      event?.stopPropagation?.();

      if (!api) return;

      api.scrollPrev();
      requestAnimationFrame(() => onSelect(api));
    },
    [api, onSelect]
  );

  const scrollNext = React.useCallback(
    (event) => {
      event?.preventDefault?.();
      event?.stopPropagation?.();

      if (!api) return;

      api.scrollNext();
      requestAnimationFrame(() => onSelect(api));
    },
    [api, onSelect]
  );

  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        scrollPrev(event);
      }

      if (event.key === "ArrowRight") {
        scrollNext(event);
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;

    onSelect(api);

    api.on("select", onSelect);
    api.on("reInit", onSelect);
    api.on("resize", onSelect);
    api.on("settle", onSelect);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      api.off("resize", onSelect);
      api.off("settle", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts: carouselOptions,
        orientation,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          "flex select-none",
          orientation === "horizontal"
            ? "-ml-4 [touch-action:pan-y_pinch-zoom]"
            : "-mt-4 flex-col [touch-action:pan-x_pinch-zoom]",
          className
        )}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  onClick,
  onPointerDownCapture,
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      type="button"
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      aria-disabled={!canScrollPrev}
      data-disabled={!canScrollPrev}
      className={cn(
        "absolute z-20 h-10 w-10 touch-manipulation rounded-full",
        !canScrollPrev && "opacity-50",
        orientation === "horizontal"
          ? "top-1/2 -left-12 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onPointerDownCapture={(event) => {
        event.stopPropagation();
        onPointerDownCapture?.(event);
      }}
      onClick={(event) => {
        scrollPrev(event);
        onClick?.(event);
      }}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  onClick,
  onPointerDownCapture,
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      type="button"
      data-slot="carousel-next"
      variant={variant}
      size={size}
      aria-disabled={!canScrollNext}
      data-disabled={!canScrollNext}
      className={cn(
        "absolute z-20 h-10 w-10 touch-manipulation rounded-full",
        !canScrollNext && "opacity-50",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onPointerDownCapture={(event) => {
        event.stopPropagation();
        onPointerDownCapture?.(event);
      }}
      onClick={(event) => {
        scrollNext(event);
        onClick?.(event);
      }}
      {...props}
    >
      <ChevronRightIcon />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};