<script setup>
import {useRoute} from 'vitepress'
const {path} = useRoute()
const tokens = path.split('/')
const words = tokens[2].split('-');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    words[i] = words[i].replace('geode', 'Geode')
}
const name = words.join('-');
</script>
# Project {{ name }}

# struct DelaunayTriangulation


 Working triangulation of the constrained tetrahedralizer: Delaunay after point insertion, then constrained by segment/facet recovery. It is not a TetrahedralSolid3D on purpose: the hot loops need raw arrays, O(1) tetrahedron slot reuse, cheap flip undo and ghost tetrahedra (INFINITE_VERTEX) closing the convex hull. Tetrahedra are positively oriented (exact orient_3d > 0). A tetrahedron may contain the INFINITE_VERTEX: it is then outside the convex hull and is positively oriented when replacing the infinite vertex by any point strictly beyond its finite facet. Facet f of a tetrahedron is the facet opposite to its vertex f. Adjacents are encoded as adjacent_tet * 4 + adjacent_facet (NO_ID for none). Deleted tetrahedra slots are stored in free_tets and reused by create_tet.



## Members

```cpp
public vector points

```

```cpp
public vector tets

```

```cpp
public vector adjacents

```

```cpp
public vector free_tets

```

```cpp
public vector deleted

```

```cpp
public vector vertex_tet

```

```cpp
public vector star_marks

```

```cpp
public index_t star_mark

```

```cpp
public static const index_t INFINITE_VERTEX

```



## Functions

### create_tet

```cpp
public index_t create_tet(std::array<index_t, 4> vertices)
```


 Create a tetrahedron (reusing a free slot if any) with no adjacent and update vertex_tet of its finite vertices.

### is_infinite

```cpp
public bool is_infinite(index_t tet)
```


### is_deleted

```cpp
public bool is_deleted(index_t tet)
```


### nb_active_tets

```cpp
public index_t nb_active_tets()
```


### find_edge

```cpp
public std::optional<index_t> find_edge(index_t v0, index_t v1)
```


 Return a tetrahedron containing the edge (v0, v1), if any.

### delete_tet

```cpp
public void delete_tet(index_t tet)
```


 Mark the tetrahedron as deleted and make its slot reusable. Adjacents pointing to it are not modified.

### find_facet

```cpp
public std::optional<index_t> find_facet(const std::array<index_t, 3> & vertices)
```


 Return the encoded facet (tet * 4 + facet) of a tetrahedron containing the given facet vertices, if any.

### set_adjacent

```cpp
public void set_adjacent(index_t tet, local_index_t facet, index_t encoded)
```


 Set the adjacent of the given facet, and the reverse adjacency if encoded is not NO_ID.



