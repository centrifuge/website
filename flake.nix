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
              ".yarn"
              "config"
              "content"
              "lambda"
              "plugins"
              "src"
              "static"
              "utils"
            ]) ++ [
              ".yarnrc.yml"
              "gatsby-browser.js"
              "gatsby-config.js"
              "gatsby-node.js"
              "gatsby-ssr.js"
              "graphql-types.ts"
              "package.json"
              "postcss.config.js"
              "tsconfig.json"
              "webpack.functions.js"
              "yarn.lock"
            ];
          };
          overrideAttrs = old: {
            buildInputs = old.buildInputs ++ [ pkgs.tree pkgs.python3 ];
            buildPhase = "yarn gatsby build";
            installPhase = "mv public $out";
          };
        };
      });
}
