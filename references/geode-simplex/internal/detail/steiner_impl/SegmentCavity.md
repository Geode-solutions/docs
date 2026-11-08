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

# class SegmentCavity


 Recover a missing segment by re-tetrahedralizing the tetrahedra it crosses, with Steiner points accepted by the filter: every created tetrahedron meeting the segment contains it.



## Functions

### SegmentCavity

```cpp
public void SegmentCavity(DelaunayTriangulation & mesh, absl::Span<const std::array<index_t, 2>> segments, index_t segment_id, const ConstraintSet & constraints, const SteinerFilter & steiner_filter)
```


### recover

```cpp
public bool recover(std::optional<local_index_t> steiner_layers)
```


 Successively: re-tetrahedralization without Steiner point of the crossed tetrahedra, then of one more layer; Steiner point joined to the crossed tetrahedra boundary followed by flips or re-tetrahedralization without Steiner point; re-tetrahedralization with Steiner points of the crossed tetrahedra, then of at most steiner_layers more layers (each try gets more expensive: a segment in a thin configuration made an unbounded growth run over most of the mesh); none if steiner_layers is empty.

### split

```cpp
public index_t split()
```


 Insert a temporary vertex at the middle of the missing segment (as TetGen and HXT split a segment they cannot recover otherwise): the tetrahedra containing it are joined to it. The caller replaces the segment by its two halves and must remove the vertex once the constraints are recovered (no vertex may stay on a constraint).

**return** the new vertex, NO_ID if the middle is not strictly inside the mesh, duplicates a vertex or lies on a present constraint (mesh untouched).



