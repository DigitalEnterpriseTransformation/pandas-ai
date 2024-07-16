"""Helper functions to save charts to a file, if plt.show() is called."""
from pathlib import Path

from .logger import Logger

import matplotlib as mpl
import matplotlib.font_manager as fm

def add_save_chart(
    code: str,
    logger: Logger,
    file_name: str,
    save_charts_path_str: str = None,
) -> str:
    """
    Add line to code that save charts to a file, if plt.show() is called.

    Args:
        code (str): Code to add line to.
        logger (logging.Logger): Logger to use.
        file_name (str): Name of folder to save charts to.
        save_charts_path (str): User Defined Path to save Charts

    Returns:
        str: Code with line added.

    """
    save_charts_path = Path(save_charts_path_str) if save_charts_path_str else None

    if save_charts_path is not None:
        save_charts_path.mkdir(parents=True, exist_ok=True)

        save_charts_file = save_charts_path / f"{file_name}.png"
        
        # # to ensure the plt can display Chinese characters properly
        # if "\nplt" in code and "plt.rcParams" not in code:
        #     # Find the index of the first occurrence of "\nplt"
        #     import re
        #     match = re.search(r"\n.*plt\.", code)
        #     if match:
        #         index = match.start()
        #         code_to_add = "\nplt.rcParams['font.family'] = ['kkk', 'rrr']"
        #         code = code[:index] + code_to_add + code[index:]
        
        # company name desensitization
        code = insert_desensitized_plot_call(code)
            
        # to ensure the resulted plots are not cropped
        if "plt.savefig" in code and "bbox_inches='tight'" not in code:
            # Find the index of the first occurrence of "plt.savefig"
            index = code.find("plt.savefig")

            # Insert the argument 'bbox_inches='tight'' before the closing parenthesis
            insert_index = code.find(")", index)
            if insert_index != -1:  # If closing parenthesis is found
                code = code[:insert_index] + ", bbox_inches='tight'" + code[insert_index:]

        if "temp_chart.png" in code:
            code = code.replace("temp_chart.png", save_charts_file.as_posix())
            logger.log(f"Saving charts to {save_charts_file}")

    return code

def insert_desensitized_plot_call(code):
    if "plt.savefig" in code and "desensitized_plot" not in code:
        # Split the code into lines
        lines = code.split('\n')
        
        for i, line in enumerate(lines):
            if "plt.savefig" in line:
                # Determine the indentation level of the plt.savefig line
                indent = len(line) - len(line.lstrip())
                indentation = ' ' * indent
                
                # Determine which desensitized_plot call to insert
                if 'plt.subplots' in code and 'fig' in code:
                    code_to_add = f"{indentation}desensitized_plot(fig, use_subplots=True)\n"
                else:
                    code_to_add = f"{indentation}desensitized_plot(plt)\n"
                
                # Insert the desensitized_plot call before the plt.savefig line
                lines.insert(i, code_to_add)
                break
        
        # Join the lines back into a single string
        code = '\n'.join(lines)
    
    return code
