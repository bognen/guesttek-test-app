# Setting Up Grails 2.4 Environment

This README provides instructions for setting up a Grails 2.4 development environment on Windows, macOS, and Linux. Grails is a powerful web framework, based on the Groovy language and built on top of the Spring framework.

## Prerequisites

Before you begin, ensure you have the Java Development Kit (JDK) installed. Grails 2.4 requires JDK 7 or 8.

### Installing JDK

1. **Download JDK**:
   - [Download](https://rendezview-test-bucket.s3.amazonaws.com/jdk-8u202-windows-x64.exe) provided JDK version

2. **Install JDK**:
   - Follow the installation instructions specific to your operating system.

3. **Set JAVA_HOME**:
   - **Windows**:
     - Right-click My Computer, and select Properties.
     - Go to the Advanced tab, and click Environment Variables.
     - Add a new system variable with the name `JAVA_HOME` and value as the path to your JDK installation.
   - **macOS/Linux**:
     - Open your terminal and add the following line to your `.bashrc`, `.zshrc`, or equivalent:
       ```bash
       export JAVA_HOME=$(/usr/libexec/java_home -v 1.8)
       ```
     - Reload the configuration file, e.g., `source ~/.bashrc`.

### Verify Installation

- Open a command prompt or terminal and type:
  ```bash
  java -version

  ### Installing Groovy 1.9

  1. **Download and Install Groovy**:
     - [Download Groovy] (https://rendezview-test-bucket.s3.amazonaws.com/groovy-2.1.8-installer.exe).

  2. **Install Groovy**:
     - Typically, Groovy is installed in a directory such as `C:\Program Files (x86)\Groovy` on Windows systems.

  3. **Set GROOVY_HOME**:
     - **Windows**:
       - Access the Environment Variables via the System Properties:
         - Right-click 'This PC' or 'Computer' on the desktop or in File Explorer.
         - Select 'Properties'.
         - Click 'Advanced system settings'.
         - Click 'Environment Variables'.
       - Create a new system variable named `GROOVY_HOME` and set its value to the path of your Groovy installation (e.g., `c:\groovy`).
       - Add `%GROOVY_HOME%\bin` to your `Path` system variable.
     - **macOS/Linux**:
       - Open your terminal.
       - Edit your shell's configuration file (`.bashrc`, `.zshrc`, etc.) and add the following lines:
         ```bash
         export GROOVY_HOME=/path/to/groovy
         export PATH="$PATH:$GROOVY_HOME/bin"
         ```
       - Apply the changes by sourcing the config file (e.g., `source ~/.bashrc`).

  4. **Verify Groovy Installation**:
     - Open a new command prompt or terminal session.
     - Type the following command and press Enter:
       ```bash
       groovy --version
       ```
     - The system should display the installed version of Groovy, confirming that it is correctly installed and configured.

## Installing Grails 2.4.5

1. **Download Grails 2.4**:
   - [Download](https://rendezview-test-bucket.s3.amazonaws.com/Grails-2.4.5.zip) provided compressed Grails folder.

2. **Extract Grails**:
   - Extract the downloaded ZIP file to a directory of your choice.

3. **Set GRAILS_HOME**:
   - **Windows**:
     - Add a new system variable with the name `GRAILS_HOME` and value as the path to your Grails installation.
     - Update the `Path` environment variable by appending `%GRAILS_HOME%\bin;`.
   - **macOS/Linux**:
     - Add the following lines to your `.bashrc`, `.zshrc`, or equivalent:
       ```bash
       export GRAILS_HOME=/path/to/grails
       export PATH="$PATH:$GRAILS_HOME/bin"
       ```
     - Reload the configuration file, e.g., `source ~/.bashrc`.

4. **Verify Grails Installation**:
   - In your command prompt or terminal, type:
     ```bash
     grails -version
     ```
   - This should display the installed version of Grails.

## Project Setup

 To set up the project on your local machine, follow these steps:

 - Clone this repository using `git clone [repository-url]`.
 - Navigate to the `guesttek-test-app` directory with `cd guesttek-test-app`.
 - Execute the command `grails run-app` to start the application.
 - After all dependencies are installed, the application will be served at `http://localhost:8080/guesttek-test-app/`.
