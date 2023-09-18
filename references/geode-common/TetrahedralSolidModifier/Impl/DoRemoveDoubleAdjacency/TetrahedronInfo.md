# struct TetrahedronInfo


## Members

public index_t tetrahedron_id

public index_t adj_tetrahedron_id

public std::array<local_index_t, 2> double_adj_facets

public std::array<local_index_t, 2> adj_double_adj_facets

public std::array<absl::optional<PolyhedronFacet>, 2> opposite_facet_adjacents

public std::array<absl::optional<PolyhedronFacet>, 2> adj_opposite_facet_adjacents



