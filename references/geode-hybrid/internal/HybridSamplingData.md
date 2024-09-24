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

# class HybridSamplingData


```cpp
Inherits from SamplingData<DataModel>
```



## Functions

### HybridSamplingData

```cpp
public void HybridSamplingData<DataModel>(const HybridSamplingData<DataModel> & )
```


### operator=

```cpp
public HybridSamplingData<DataModel> & operator=(const HybridSamplingData<DataModel> & )
```


### HybridSamplingData

```cpp
public void HybridSamplingData<DataModel>(HybridSamplingData<DataModel> && )
```


### operator=

```cpp
public HybridSamplingData<DataModel> & operator=(HybridSamplingData<DataModel> && )
```


### HybridSamplingData

```cpp
public void HybridSamplingData<DataModel>(DataModel & model, const Metric<dimension> & metric, const class FrameFieldParameterization::ExtractedElements & elements)
```


### ~HybridSamplingData

```cpp
public void ~HybridSamplingData<DataModel>()
```


### unique_vertices_mapping

```cpp
public BijectiveMapping<index_t> & unique_vertices_mapping()
```


### elements

```cpp
public const class FrameFieldParameterization::ExtractedElements & elements()
```




# class HybridSamplingData


```cpp
Inherits from SamplingData<BRep>
```



