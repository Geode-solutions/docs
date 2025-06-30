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

# class BRepBlockImpliciter


## Functions

### BRepBlockImpliciter

```cpp
public void BRepBlockImpliciter(const BRep & model, BRepBuilder & builder, const Block3D & block, const ImplicitDataManager3D & data_manager)
```


### BRepBlockImpliciter

```cpp
public void BRepBlockImpliciter(BRepBlockImpliciter && block_modeler)
```


### ~BRepBlockImpliciter

```cpp
public void ~BRepBlockImpliciter()
```


### compute_implicit_function

```cpp
public void compute_implicit_function(const ImplicitationParameters & computation_parameters, double function_value_interval)
```


### interpolate_function_on_mesh

```cpp
public void interpolate_function_on_mesh()
```


### create_mesh_with_function_in_block

```cpp
public void create_mesh_with_function_in_block(Span values_to_densify_around)
```




