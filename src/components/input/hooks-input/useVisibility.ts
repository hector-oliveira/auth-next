interface UseVisibilityArgs {
  handleToggle: () => void;
  handleInputSelection: () => void;
}

// Custom hook for handling visibility
export function useVisibility({
  handleToggle,
  handleInputSelection,
}: UseVisibilityArgs) {
  const handleFunctionToggle = () => {
    handleToggle();
    handleInputSelection();
  };

  return handleFunctionToggle;
}
