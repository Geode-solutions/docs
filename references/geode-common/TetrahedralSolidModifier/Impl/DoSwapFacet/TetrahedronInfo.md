# struct TetrahedronInfo

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/tetrahedral_solid_modifier.cpp#1953
```

## Members

```cpp
public index_t tetrahedron_id

```

```cpp
public index_t adj_tetrahedron_id

```

```cpp
public PolyhedronFacetVertices facet_vertices

```

```cpp
public std::array<local_index_t, 3> local_facet_vertices

```

```cpp
public std::array<local_index_t, 3> adj_local_facet_vertices

```

```cpp
public array opposite_vertices

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 3> tetrahedron_adjacents

```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 3> adj_tetrahedron_adjacents

```

```cpp
public array new_tetrahedra_ids

```



