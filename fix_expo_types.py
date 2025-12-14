
import os

def fix_expo_types():
    file_path = 'node_modules/expo/types/react-native-web.d.ts'
    with open(file_path, 'r') as f:
        lines = f.readlines()

    new_lines = []
    grid_props = [
        'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows',
        'gridColumnEnd', 'gridColumnGap', 'gridColumnStart',
        'gridRowEnd', 'gridRowGap', 'gridRowStart',
        'gridTemplateColumns', 'gridTemplateRows', 'gridTemplateAreas',
        'gap', 'rowGap', 'columnGap'
    ]

    # Note: gap, rowGap, columnGap might not be in the file as string, but let's check.
    # The file has gridColumnGap, gridRowGap.

    for line in lines:
        is_grid_prop = False
        for prop in grid_props:
            if f'{prop}?: string;' in line:
                is_grid_prop = True
                break

        if is_grid_prop:
            new_lines.append(f'// {line}')
        else:
            new_lines.append(line)

    with open(file_path, 'w') as f:
        f.write(''.join(new_lines))

if __name__ == '__main__':
    fix_expo_types()
