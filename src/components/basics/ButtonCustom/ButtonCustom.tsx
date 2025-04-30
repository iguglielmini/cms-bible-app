import { ReactNode } from "react";
import { Button, ButtonProps, useTheme } from "@mui/material";

type CustomSize = "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

interface ButtonCustomProps extends ButtonProps {
  customSize?: CustomSize;
  children: ReactNode;
}

const sizeMap: Record<
  CustomSize,
  { py: number; px: number; fontSize: number }
> = {
  xs: { py: 0.5, px: 1.5, fontSize: 10 },
  sm: { py: 1, px: 2, fontSize: 12 },
  md: { py: 1.5, px: 3, fontSize: 14 },
  lg: { py: 2, px: 4, fontSize: 16 },
  xl: { py: 2.5, px: 5, fontSize: 18 },
  xxl: { py: 3, px: 6, fontSize: 20 },
  xxxl: { py: 3.5, px: 7, fontSize: 22 },
};

export function ButtonCustom({
  customSize = "md",
  children,
  ...props
}: ButtonCustomProps) {
  const theme = useTheme();
  const { py, px, fontSize } = sizeMap[customSize];

  return (
    <Button
      {...props}
      sx={{
        paddingY: theme.spacing(py),
        paddingX: theme.spacing(px),
        fontSize,
        textTransform: "none",
        ...props.sx,
      }}
    >
      {children}
    </Button>
  );
}
