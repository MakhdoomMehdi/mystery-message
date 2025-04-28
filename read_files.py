import os

# Function to print folder structure of 'src' folder
def print_src_folder_structure(folder_path, indent=0):
    try:
        # Check if the 'src' folder exists
        src_folder_path = os.path.join(folder_path, 'src')
        if os.path.exists(src_folder_path):
            # List all files and directories in the 'src' folder
            for root, dirs, files in os.walk(src_folder_path):
                # Get the relative path from the 'src' folder
                relative_root = os.path.relpath(root, src_folder_path)
                
                # Print the folder name
                print(" " * indent + f"[DIR] {relative_root if relative_root else 'src'}")
                
                # Print the directories
                for dir_name in dirs:
                    print(" " * (indent + 2) + f"[DIR] {dir_name}")
                
                # Print the files
                for file_name in files:
                    print(" " * (indent + 2) + f"[FILE] {file_name}")
        else:
            print(f"The 'src' folder does not exist in the specified directory.")
    except Exception as e:
        print(f"An error occurred: {e}")

# Set your folder path here (make sure the folder contains 'src')
folder_path = '.'  # Current folder, modify if needed

# Run the function to print the 'src' folder structure
print_src_folder_structure(folder_path)
