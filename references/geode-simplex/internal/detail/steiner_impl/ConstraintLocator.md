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

# class ConstraintLocator


 Exact test of a point against every input segment and triangle (with an exact bounding box filter).



## Functions

### ConstraintLocator

```cpp
public void ConstraintLocator(const std::vector<Point3D> & points, absl::Span<const std::array<index_t, 2>> segments, absl::Span<const Triangle> triangles)
```


### is_on_constraint

```cpp
public bool is_on_constraint(const Point3D & point)
```


 The tree queries return a superset of the boxes containing the point, then each candidate is tested exactly.



