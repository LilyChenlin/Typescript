// 合并命名空间和类 内部类
class Album {
    label: Album.AlbumLabel;
}
namespace Album {
    export class AlbumLabel { };
}

// 创建一个函数
function buildLabel(name: string): string {
    return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
    export let prefix = "Hello, ";
    export let suffix = "";
}

// 命名空间可以用来扩展枚举型
enum Color {
    red = 1,
    green = 2,
    blue = 4
}

namespace Color {
    export function mixColor(colorName: string) {
        if (colorName === "yellow") {
            return Color.red + Color.green;
        } else if (colorName === "white") {
            return Color.red + Color.green + Color.blue;
        } else if (colorName === "magenta") {
            return Color.red + Color.blue;
        } else if (colorName === "cyan") {
            return Color.green + Color.blue;
        }
    }
}