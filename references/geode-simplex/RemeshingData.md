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

# class RemeshingData


# class RemeshingData


# class RemeshingData


 Structure holding all the data required for the remeshing algorithm Aliases are defined for BRep and Section.



## Functions

### RemeshingData

```cpp
public void RemeshingData<DataModel>(Model && background, Model & output, const Metric<dimension> & metric)
```


### RemeshingData

```cpp
public void RemeshingData<DataModel>(Model && background, Model & output, const Metric<dimension> & metric, const absl::flat_hash_map<ComponentType, std::vector<uuid> > & components_to_remesh)
```


### ~RemeshingData

```cpp
public void ~RemeshingData<DataModel>()
```


### background

```cpp
public const Model & background()
```


### background_builder

```cpp
public Builder & background_builder()
```


### background_modifier

```cpp
public Modifier & background_modifier()
```


### output

```cpp
public const Model & output()
```


### output_builder

```cpp
public Builder & output_builder()
```


### output_modifier

```cpp
public Modifier & output_modifier()
```


### metric

```cpp
public const Metric<dimension> & metric()
```


### output_mapping

```cpp
public ModelCopyMapping && output_mapping()
```


### output_id

```cpp
public const uuid & output_id(const ComponentID & component)
```


### from_output_id

```cpp
public const uuid & from_output_id(const ComponentID & component)
```


### RemeshingData

```cpp
public void RemeshingData<DataModel>(Model && background, Model & output, const Metric<dimension> & metric, const int & components_to_remesh)
```



