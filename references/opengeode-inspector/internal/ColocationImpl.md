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

# class ColocationImpl


# class ColocationImpl


# class ColocationImpl


# class ColocationImpl


# class ColocationImpl


 Implementation of the inspection of the colocation of a Mesh



## Functions

### ColocationImpl

```cpp
protected void ColocationImpl<dimension, Mesh>(const Mesh & mesh)
```


### mesh_has_colocated_points

```cpp
public bool mesh_has_colocated_points()
```


### colocated_points_groups

```cpp
public InspectionIssues colocated_points_groups()
```




# class ColocationImpl


# class ColocationImpl


# class ColocationImpl


