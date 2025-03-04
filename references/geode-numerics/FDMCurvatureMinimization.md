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

# class FDMCurvatureMinimization


# class FDMCurvatureMinimization


# class FDMCurvatureMinimization


## Functions

### FDMCurvatureMinimization

```cpp
public void FDMCurvatureMinimization<dimension>(ComputationGrid<dimension> & grid, const DataConstraintsManager<dimension> & data_constraints)
```


### ~FDMCurvatureMinimization

```cpp
public void ~FDMCurvatureMinimization<dimension>()
```


### use_scalar_function_preconditioning

```cpp
public void use_scalar_function_preconditioning(basic_string_view function_name)
```


### compute_scalar_function

```cpp
public void compute_scalar_function(basic_string_view scalar_function_name)
```




