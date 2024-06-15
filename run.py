import subprocess
command = 'npm run start'

print('\n\033[0;32m Starting your Server... \n')
print('\n \033[0;31m ** To Terminate the server press <ctrl>+C ** \033[0m \n')
subprocess.run(command,shell=True)