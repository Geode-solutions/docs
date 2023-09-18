# struct TetrahedronInfo


## Members

public index_t tetrahedron_id

public index_t adj_tetrahedron_id

public PolyhedronFacetVertices facet_vertices

public std::array<local_index_t, 3> local_facet_vertices

public std::array<local_index_t, 3> adj_local_facet_vertices

public array opposite_vertices

public std::array<absl::optional<PolyhedronFacet>, 3> tetrahedron_adjacents

public std::array<absl::optional<PolyhedronFacet>, 3> adj_tetrahedron_adjacents

public array new_tetrahedra_ids



