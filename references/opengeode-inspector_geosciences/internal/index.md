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

# namespace internal



## Functions

### component_identification_to_string

```cpp
std::string component_identification_to_string(const Component & component)
```


### model_geometrical_components_are_linked_to_geology

```cpp
bool model_geometrical_components_are_linked_to_geology(const Model & model)
```

### add_model_geometrical_components_not_linked_to_geology

```cpp
void add_model_geometrical_components_not_linked_to_geology(const Model & model, InspectionIssues<ComponentID> & issues)
```

### model_geometrical_components_are_linked_to_geology

```cpp
bool model_geometrical_components_are_linked_to_geology(const CrossSection & model)
```


### model_geometrical_components_are_linked_to_geology

```cpp
bool model_geometrical_components_are_linked_to_geology(const StructuralModel & model)
```


### add_model_geometrical_components_not_linked_to_geology

```cpp
void add_model_geometrical_components_not_linked_to_geology(const CrossSection & model, InspectionIssues<ComponentID> & issues)
```


### add_model_geometrical_components_not_linked_to_geology

```cpp
void add_model_geometrical_components_not_linked_to_geology(const StructuralModel & model, InspectionIssues<ComponentID> & issues)
```


### model_geological_components_are_linked_to_geometry

```cpp
bool model_geological_components_are_linked_to_geometry(const Model & model)
```


### add_model_geological_components_not_linked_to_geometry

```cpp
void add_model_geological_components_not_linked_to_geometry(const Model & model, InspectionIssues<ComponentID> & issues)
```


### is_geological_collection

```cpp
bool is_geological_collection(const ComponentType & component_type)
```




