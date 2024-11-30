{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.typescript  
  ];

  shellHook = ''
    echo "Welcome to the Vite + React + TypeScript development environment!"

    # Check if package.json exists before trying to install dependencies
    if [ -f "package.json" ]; then
      if [ ! -d "node_modules" ]; then
        echo "Installing dependencies..."
        npm install  # or yarn install, if you're using Yarn
      fi
    else
      echo "Warning: No package.json found. Skipping npm install."
    fi
  '';
}

