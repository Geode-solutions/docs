# class DoCollapseEdge

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/tetrahedral_solid_modifier.cpp#1485
```

## Records

TetrahedronInfo



## Functions

### DoCollapseEdge

```cpp
public void DoCollapseEdge(TetrahedralSolidModifier & modifier, index_t edge_id)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/tetrahedral_solid_modifier.cpp#1496
```

### DoCollapseEdge

```cpp
public void DoCollapseEdge(TetrahedralSolidModifier & modifier, const PolyhedronFacetEdge & edge, array edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/tetrahedral_solid_modifier.cpp#1510
```

### collapse

```cpp
public SolidCollapseEdgeInfo collapse(index_t collapse_vertex)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/tetrahedral_solid_modifier.cpp#1523
```

### get_preserved_facet_local_indices

```cpp
public std::array<local_index_t, 2> get_preserved_facet_local_indices(index_t tetrahedron_id, const std::array<index_t, 2> & edge_vertices)
```

```cpp
Defined at /github/workspace/src/geode/common/modifier/solid/tetrahedral_solid_modifier.cpp#1649
```



