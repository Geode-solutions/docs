# struct TetrahedronInfo


## Members

```cpp
public index_t tetrahedron_id
```

```cpp
public index_t adj_tetrahedron_id
```

```cpp
public std::array<local_index_t, 2> double_adj_facets
```

```cpp
public std::array<local_index_t, 2> adj_double_adj_facets
```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 2> opposite_facet_adjacents
```

```cpp
public std::array<absl::optional<PolyhedronFacet>, 2> adj_opposite_facet_adjacents
```



