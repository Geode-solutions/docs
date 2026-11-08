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

# class InSphereCache


 In-sphere tests against tetrahedra, filtered with floating point coefficients of each tetrahedron computed lazily at its first query (see GEO::PCK::InSphereCoefficients) and falling back to the exact in_sphere_3d_SOS. The symbolic perturbation of in_sphere_3d_SOS is ordered by the addresses of the points: the exact points given to in_sphere must be references into one contiguous array, ordered as the perturbation should be. All the in-sphere tests of a triangulation must use the same order to be consistent with each other.



## Functions

### reserve

```cpp
public void reserve(index_t nb_tets)
```


### assign

```cpp
public void assign(index_t nb_tets)
```


 Forget everything and prepare nb_tets tetrahedra, none computed.

### push_back

```cpp
public void push_back()
```


 Add a tetrahedron, not computed.

### invalidate

```cpp
public void invalidate(index_t tet)
```


 The vertices of the tetrahedron changed: its coefficients must be computed again.

### data

```cpp
public const void * data(index_t tet)
```


 Address of the data of the tetrahedron, to prefetch it.

### in_sphere

```cpp
public bool in_sphere(index_t tet, const std::array<index_t, 4> & vertices, index_t vertex, const FilterPoint & filter_point, const ExactPoint & exact_point)
```




**return** true if the point vertex is strictly inside the circumsphere of the positively oriented tetrahedron tet (the result of in_sphere_3d_SOS is never zero).

**filter_point** [in] Point of a vertex, used by the floating point filter: any array of points (e.g. a copy of the points with a better memory locality).

**exact_point** [in] Point of a vertex, used by the exact predicate: see the class description.



