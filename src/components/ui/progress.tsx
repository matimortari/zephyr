"use client"

import { cn } from "@/src/lib/utils"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import * as React from "react"

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
	<ProgressPrimitive.Root
		ref={ref}
		className={cn("items-center overflow-hidden rounded-full border border-muted-foreground", className)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-2 w-2 flex-1 rounded-full bg-white shadow-lg ring-2"
			style={{ marginLeft: `${value}%` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
