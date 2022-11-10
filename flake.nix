{
  description = "Nix Flake for centrifuge webiste";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
    nix-filter.url = "github:numtide/nix-filter";
  };

  outputs = { self, nixpkgs, flake-utils, nix-filter }:
    flake-utils.lib.eachDefaultSystem (system:
      with import nixpkgs { inherit system; }; {
        defaultPackage = pkgs.callPackage ./yarn-project.nix { } {
          src = nix-filter.lib {
            root = ./.;
            include = (map nix-filter.lib.inDirectory [
              "data"
              "config"
              "src"
              "static"
            ]) ++ [
              ".nvmrc"
              ".prettierrc.js"
              "gatsby-config.js"
              "gatsby-node.js"
              "gatsby-ssr.js"
              "index.d.ts"
              "package.json"
              "tsconfig.json"
              "yarn.lock"
            ];
          };
          overrideAttrs = old: {
            buildInputs = old.buildInputs
              ++ (with pkgs; [ python3 vips pkg-config ]);
            preConfigure = ''
              yarn install --immutable --immutable-cache --mode=skip-build
              patchShebangs node_modules
            '';
            buildPhase = "yarn gatsby build --prefix-paths";
            installPhase = "mv public $out";
          };
        };

        devShell = pkgs.mkShell { buildInputs = [ yarn ipfs ]; };
      });
}
