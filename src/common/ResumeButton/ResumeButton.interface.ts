export interface ResumeButtonProps {
    isBlurred: boolean;
    buttonRef: React.RefObject<HTMLButtonElement | null>;
    handleDownload: () => void;
}