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

# class SwapFacetsSearch


 Multi-face removal search (Shewchuk, "Two Discrete Optimization Algorithms for the Topological Improvement of Tetrahedral Meshes", 2002). The seed facet is seen from the tetrahedron containing the apex a, the tetrahedron across it contains the apex b. The faces sandwiched between a and b (each one forms a tetrahedron with a and one with b) are reached from the seed across their edges, each face once, which gives a tree. Each edge of a face (but the one to its parent) is either a border edge of the removed polygon, creating the tetrahedron (b, a, edge), or leads to a child face added to the polygon. The dynamic programming picks, for each edge, the choice whose subtree has the best worst metric of the new tetrahedra.

 The search reuses its working buffers (faces, visited tetrahedra, edges) from one call to the next: an instance is neither const nor re-entrant, use one instance by thread and by solid. When the faces around a vertex form a cycle, the tree is searched again once for each edge of the cycle, so the cost of a search is the one of a tree search times one plus the number of cycle edges.



## Records

Candidate



## Functions

### SwapFacetsSearch

```cpp
public void SwapFacetsSearch(const SwapFacetsSearch & )
```


### SwapFacetsSearch

```cpp
public void SwapFacetsSearch(SwapFacetsSearch && )
```


### operator=

```cpp
public SwapFacetsSearch & operator=(const SwapFacetsSearch & )
```


### operator=

```cpp
public SwapFacetsSearch & operator=(SwapFacetsSearch && )
```


### SwapFacetsSearch

```cpp
public void SwapFacetsSearch(const ModifiableTetrahedralSolid & solid, const TetrahedralSolidConstraintModifier::Constraints & constraints, const TetrahedralSolidImprovementSimulator3D & improvement_simulator)
```


### ~SwapFacetsSearch

```cpp
public void ~SwapFacetsSearch()
```


### search

```cpp
public std::optional<Candidate> search(const PolyhedronFacet & seed)
```


 Best multi-face removal containing the seed facet: positive new tetrahedra, no immuable removed edge, no forbidden new edge or facet. std::nullopt if there is none.

### is_better

```cpp
public bool is_better(double metric, double other)
```


 Is metric strictly better than other for the simulator



