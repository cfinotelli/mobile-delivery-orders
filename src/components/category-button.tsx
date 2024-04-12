import { clsx } from "clsx";
import { Pressable, PressableProps, Text } from "react-native";

interface CategoryButtonProps extends PressableProps {
  title: string;
  isSelected?: boolean;
}

export function CategoryButton({
  title,
  isSelected,
  ...props
}: CategoryButtonProps) {
  return (
    <Pressable
      className={clsx(
        "bg-slate-800 px-4 justify-center rounded-md h-10",
        isSelected && "border-2 border-lime-300"
      )}
      {...props}
    >
      <Text className="text-slate-100 font-medium text-sm">{title}</Text>
    </Pressable>
  );
}
