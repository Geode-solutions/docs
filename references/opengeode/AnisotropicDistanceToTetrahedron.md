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

# class AnisotropicDistanceToTetrahedron


# class AnisotropicDistanceToTetrahedron


## Functions

### AnisotropicDistanceToTetrahedron

```cpp
public void AnisotropicDistanceToTetrahedron<dimension>(const TetrahedralSolid<dimension> & mesh, const CoordinateSystem<dimension> & coordinate_system)
```


### operator()

```cpp
public double operator()(const Point<dimension> & query, index_t cur_box)
```




