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

# class StratigraphicSolidPathFinder


## Functions

### StratigraphicSolidPathFinder

```cpp
public void StratigraphicSolidPathFinder(const TetrahedralSolid3D & block_mesh, basic_string_view STRATIGRAPHIC_POINT_ATTRIBUTE_NAME, const Point3D & first_point, const Point3D & last_point, const SolidPath & first_point_path)
```


### propagate_to_containing_polyhedron

```cpp
public SolidPath propagate_to_containing_polyhedron()
```




