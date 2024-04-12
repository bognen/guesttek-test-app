# Setting Up Grails 2.4 Environment

This README provides instructions for setting up a Grails 2.4 development environment on Windows, macOS, and Linux. Grails is a powerful web framework, based on the Groovy language and built on top of the Spring framework.

## Prerequisites

Before you begin, ensure you have the Java Development Kit (JDK) installed. Grails 2.4 requires JDK 7 or 8.

### Installing JDK

1. **Download JDK**:
   - Go to the [Oracle website](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html) or use OpenJDK.
   - Select the appropriate JDK version for your operating system and download.

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

## Installing Grails 2.4

1. **Download Grails 2.4**:
   - Visit the [Grails 2.4 release page](https://github.com/grails/grails-core/releases/tag/v2.4.0) and download the appropriate version for your OS.

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
