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
		className={cn("relative h-3 w-full overflow-hidden rounded-full bg-secondary", className)}
		{...props}
	>
		<ProgressPrimitive.Indicator
			className="h-3 w-3 flex-1 rounded-full bg-primary shadow-lg shadow-white ring-2"
			style={{ marginLeft: `${value}%` }}
		/>
	</ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
