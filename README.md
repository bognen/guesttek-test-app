# Setting Up Project

This README provides instructions for setting up a Grails 2.4 development environment on Windows only.
## Prerequisites

Before you begin, ensure you have the Java Development Kit (JDK) installed. Grails 2.4 requires JDK 8.

### Installing JDK

1. **Download JDK**:
   - [Download](https://rendezview-test-bucket.s3.amazonaws.com/jdk-8u202-windows-x64.exe) provided JDK version

2. **Install JDK**:
   - Follow the installation instructions specific to your operating system.

3. **Set JAVA_HOME**:
     - Right-click My Computer, and select Properties.
     - Go to the Advanced tab, and click Environment Variables.
     - Add a new system variable with the name `JAVA_HOME` and value as the path to your JDK installation.

4. **Verify Installation:**:
   - Open a command prompt or terminal and type:
     ```bash
     java -version

### Installing Groovy

  1. **Download and Install Groovy**:
     - [Download Groovy](https://rendezview-test-bucket.s3.amazonaws.com/groovy-2.1.8-installer.exe).

  2. **Install Groovy**:
     - Install Groovy by following the steps provided in the installation wizard.
       
  3. **Verify Groovy Installation**:
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
     - Add a new system variable with the name `GRAILS_HOME` and value as the path to your Grails installation.
     - Update the `Path` environment variable by appending `%GRAILS_HOME%\bin;`.

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
