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

# class TetrahedralSolidEpsilonModifier


```cpp
Inherits from TetrahedralSolidModifier
```



## Functions

### TetrahedralSolidEpsilonModifier

```cpp
public void TetrahedralSolidEpsilonModifier(const TetrahedralSolid3D & solid, TetrahedralSolidBuilder3D & builder)
```


### ~TetrahedralSolidEpsilonModifier

```cpp
public void ~TetrahedralSolidEpsilonModifier()
```


### insert_point_in_tetrahedron

```cpp
public SolidSplitInfo insert_point_in_tetrahedron(index_t tetrahedron_id, const Point3D & point)
```


 Insert a point in a tetrahedron either by spliting the tetrahedron into four new ones, or by snapping the point on a facet (three new tetrahedra for each side), an edge (each incident tetrahedra is split into two new tetrahedra) or a vertex (no new tetrahedron).

**tetrahedron_id** [in] Index of the tetrahedron to split.

**point** [in] Coordinates of the split point.

**warning** Split tetrahedron is set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### insert_point_on_facet

```cpp
public SolidSplitInfo insert_point_on_facet(const PolyhedronFacet & facet, const Point3D & point)
```


 Insert a point on a facet either by spliting the facet into three new ones, or by snapping the point on an edge or a vertex.

**facet** [in] Index of the PolyhedronFacet to split.

**point** [in] Coordinates of the split point.

**warning** Potential split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### insert_point_on_edge

```cpp
public SolidSplitEdgeInfo insert_point_on_edge(const PolyhedronFacetEdge & edge, const Point3D & point)
```


 Insert a point on an edge either by spliting the edge into two new ones, or by snapping the point on a vertex.

**edge** [in] Index of the PolyhedronFacetEdge to split.

**point** [in] Coordinates of the split point.

**warning** Potential split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.

### insert_point_on_edge

```cpp
public SolidSplitEdgeInfo insert_point_on_edge(index_t edge_id, const Point3D & point)
```


 Insert a point on an edge either by spliting the edge into two new ones, or by snapping the point on a vertex.

**edge_id** [in] Unique index of the edge to split.

**point** [in] Coordinates of the split point.

**warning** Potential split tetrahedra are set as inactive but not deleted.

**return** new vertex index and mappings between old and new mesh.



