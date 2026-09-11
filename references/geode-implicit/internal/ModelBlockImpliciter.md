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

# class ModelBlockImpliciter


## Functions

### ModelBlockImpliciter

```cpp
public void ModelBlockImpliciter(const ModelBlockImpliciter & )
```


### operator=

```cpp
public ModelBlockImpliciter & operator=(const ModelBlockImpliciter & )
```


### ModelBlockImpliciter

```cpp
public void ModelBlockImpliciter(ImplicitStructuralModel & model, const Block3D & block, const ImplicitDataManager3D & data_manager)
```


### ModelBlockImpliciter

```cpp
public void ModelBlockImpliciter(ModelBlockImpliciter && block_modeler)
```


### operator=

```cpp
public ModelBlockImpliciter & operator=(ModelBlockImpliciter && other)
```


### ~ModelBlockImpliciter

```cpp
public void ~ModelBlockImpliciter()
```


### compute_implicit_function

```cpp
public void compute_implicit_function(const ImplicitationParameters & computation_parameters, double function_value_interval)
```


### implicit_stream_lines

```cpp
public std::vector<detail::ImplicitStreamLine3D> implicit_stream_lines()
```


### interpolate_function_on_mesh

```cpp
public void interpolate_function_on_mesh(absl::Span<const uuid> horizon_ids)
```


### create_mesh_with_function_in_block

```cpp
public void create_mesh_with_function_in_block(absl::Span<const uuid> horizon_ids)
```




