export const getRingColor = (color: string): string => {
    color = color.toLowerCase().trim();
    switch (color) {
        case "neutral":
            return "ring-neutral";
        case "primary":
            return "ring-primary";
        case "secondary":
            return "ring-secondary";       
        case "accent":
            return "ring-accent";
        case "info":
            return "ring-info";
        case "success":
            return "ring-success";      
        case "warning":
            return "ring-warning";          
        case "error":
            return "ring-error";   
        default:
            throw Error(`Unknown color: \`${color}\``);                       
    }
}