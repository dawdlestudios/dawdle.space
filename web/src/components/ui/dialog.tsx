import * as RadixDialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { type ReactElement, useImperativeHandle, useRef, useState } from "react";
import styles from "./dialog.module.css";

export interface DialogRef {
	setOpen: (open: boolean) => void;
}

export const Dialog = ({
	trigger,
	children,
	description,
	title,
	ref,
}: {
	trigger?: ReactElement | ((onSelect: (e: Event) => void) => ReactElement);
	children: ReactElement;
	title?: string;
	description?: string;
	ref?: React.Ref<DialogRef>;
}) => {
	const triggerRef = useRef<HTMLButtonElement>(null);
	const [open, setOpen] = useState(false);

	useImperativeHandle(ref, () => {
		return {
			setOpen: (open: boolean) => {
				setOpen(open);
				if (!open) {
					triggerRef?.current?.click();
				}
			},
		};
	});

	return (
		<RadixDialog.Root open={open} onOpenChange={setOpen}>
			<RadixDialog.Trigger hidden style={{ display: "none" }} asChild>
				<button type="button" ref={triggerRef} />
			</RadixDialog.Trigger>
			{typeof trigger === "function" ? (
				trigger(() => setOpen(true))
			) : (
				<RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
			)}

			<RadixDialog.Portal>
				<RadixDialog.Overlay className={styles.DialogOverlay} />
				<RadixDialog.Content className={styles.DialogContent} aria-describedby={undefined}>
					{title && <RadixDialog.Title className={styles.DialogTitle}>{title}</RadixDialog.Title>}

					{description && (
						<RadixDialog.Description className={styles.DialogDescription}>
							{description}
						</RadixDialog.Description>
					)}

					{children}
					<RadixDialog.Close asChild>
						<button type="button" className={styles.IconButton} aria-label="Close">
							<X />
						</button>
					</RadixDialog.Close>
				</RadixDialog.Content>
			</RadixDialog.Portal>
		</RadixDialog.Root>
	);
};
