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

# class BlockTetrahedralizer


```cpp
Inherits from ConstrainedTetrahedralizer
```



## Functions

### BlockTetrahedralizer

```cpp
public void BlockTetrahedralizer(const BRep & brep, BRepBuilder & builder, const Block3D & block, std::vector<Point3D> && internal_points)
```


### ~BlockTetrahedralizer

```cpp
public void ~BlockTetrahedralizer()
```


### tetrahedralize

```cpp
public std::tuple<RemeshedCMV, Mappings> tetrahedralize()
```




