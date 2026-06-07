import subprocess
from langchain_core.tools import tool


@tool
def execute(command: str) -> str:
    """Execute a command line command"""
    print(f"Executing command: {command}")
    try:
        result = subprocess.run(
            command, shell=True, capture_output=True, text=True
        )
        output = (result.stdout + result.stderr).strip()

        if len(output) > 10000:
            output = output[:10000] + "\n\n...truncated..."

        return output
    except Exception as error:
        error_message = (
            f"Command failed: {command}\n\n"
            f"Error: {error}\n\n"
            f"Tip: If using git commands with options and file paths, "
            f"make sure options (like --stat) come before file paths (like index.mjs)."
        )
        print(f"Command error: {error_message}")
        return error_message
