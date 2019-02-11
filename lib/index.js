const plugin = ({ types: t }, options) => {
	return {
		visitor: {
			ImportDeclaration(path, file) {
				if (path.node.source.value === "react") {
					const { specifiers, source } = path.node;
					const defaultSpecifier = specifiers.find(
						s => s.type === "ImportDefaultSpecifier"
					);
					if (defaultSpecifier) {
						const newPathes = [
							t.importDeclaration(
								[t.importNamespaceSpecifier(defaultSpecifier.local)],
								source
							)
						];
						const hasMoreSpecifiers = specifiers.length > 1;
						if (hasMoreSpecifiers) {
							newPathes.push(
								t.importDeclaration(
									specifiers.filter(s => s.type !== "ImportDefaultSpecifier"),
									source
								)
							);
						}
						path.replaceWithMultiple(newPathes);
					}
				}
			}
		}
	};
};

module.exports = plugin;
