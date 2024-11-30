{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs
    pkgs.npm
    pkgs.typescript
  ];

  shellHook = ''
    echo "Welcome to the TypeScript development environment!"
    # You can add additional setup here, like installing dependencies
    if [ ! -d "node_modules" ]; then
      echo "Installing dependencies..."
      npm install  # or npm install, depending on your preference
    fi
  '';
}

