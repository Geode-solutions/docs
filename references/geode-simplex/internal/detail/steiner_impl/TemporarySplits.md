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

# class TemporarySplits


 Segments split by a temporary vertex during the constraint recovery (with the triangles containing them), and their removal once every constraint is recovered: no vertex may stay on a constraint (TetGen and HXT, suppresssteinerpoints, keep the ones they cannot remove).



## Functions

### TemporarySplits

```cpp
public void TemporarySplits(absl::Span<const Triangle> triangles)
```


### is_inner_triangle_edge

```cpp
public bool is_inner_triangle_edge(const std::array<index_t, 2> & segment)
```


 True if the segment is an edge of at least two constraint triangles: a temporary vertex splitting it can be moved off them (relocate). A free edge of a triangle or a segment without triangle must come back as an edge instead.

### triangles

```cpp
public const std::vector<Triangle> & triangles()
```


 Constraint triangles to recover: the input ones, those containing a split segment being replaced by their two halves.

### nb_splits

```cpp
public index_t nb_splits()
```


### split

```cpp
public std::vector<std::array<index_t, 2>> split(const std::array<index_t, 2> & segment, index_t vertex, ConstraintSet & constraints)
```


 Split the segment (and its triangles) by the vertex, adding the new triangles to the constraints.

**return** the edges to recover: the two halves of the segment and the edges joining the vertex to the opposite vertex of each of its triangles.

### suppress

```cpp
public void suppress(DelaunayTriangulation & mesh, ConstraintSet & constraints, const SteinerFilter & steiner_filter)
```


 Remove the temporary vertices, last split first: the star of the vertex is re-tetrahedralized without it, with the split segment and triangles as constraints and Steiner points accepted by the filter (strictly inside the volume), then with one more layer...

**exception**if a vertex cannot be removed.



