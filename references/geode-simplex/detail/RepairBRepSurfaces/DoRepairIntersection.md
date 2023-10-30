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

# class DoRepairIntersection


```cpp
Inherits from DoRepair
```



## Functions

### DoRepairIntersection

```cpp
public void DoRepairIntersection(RepairBRepSurfaces & repair, const Surface3D & edge_surface, const PolygonEdge & edge, const Surface3D & triangles_surface, index_t triangle)
```


### apply

```cpp
public int apply()
```


### process_inverted_edge

```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge(RepairSurface & surface, const PolygonEdge & edge)
```


### process_inverted_edge_on_border

```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge_on_border(RepairSurface & surface, const PolygonEdge & edge)
```


### process_inverted_edge_inside

```cpp
public absl::optional<BRepGeometricModifier::BRepSplitPolygonEdgeInfo> process_inverted_edge_inside(RepairSurface & surface, const PolygonEdge & edge)
```


### inverted_edges_to_split

```cpp
public std::array<PolygonEdge, 3> inverted_edges_to_split(const RepairSurface & surface, index_t trgl)
```


### do_split_triangle

```cpp
public absl::optional<std::pair<BRepGeometricModifier::BRepSplitPolygonEdgeInfo, Point3D> > do_split_triangle(const PolygonEdge & edge)
```


### new_triangle_point

```cpp
public Point3D new_triangle_point(RepairSurface & surface, const PolygonEdge & edge)
```




