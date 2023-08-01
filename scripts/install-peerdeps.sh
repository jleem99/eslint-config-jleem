# ------------------------------------------------------------
# scripts/install-peerdeps.sh
#
# Install peer dependencies from the package.json file.
# Prompt if the user wants to install peer dependencies,
# and install them if they do using `npx install-peerdeps`.
# ------------------------------------------------------------
prompt_install_peer_deps() {
    local prompt="Would you like to install peer dependencies? (y/N) "
    read -p "$prompt" -n 1 -r
    echo

    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        return 1
    fi

    return 0
}

# ------------------------------------------------------------
# Path: scripts/install-peerdeps.sh
# Install peer dependencies from the package.json file.
# ------------------------------------------------------------
install_peer_deps() {
    npx install-peerdeps --dev --only-peers eslint-config-jleem
    return 0
}

# ------------------------------------------------------------
# Path: scripts/install-peerdeps.sh
# Install peer dependencies from the package.json file.
# ------------------------------------------------------------
main() {
    prompt_install_peer_deps || return 0
    install_peer_deps
}

main