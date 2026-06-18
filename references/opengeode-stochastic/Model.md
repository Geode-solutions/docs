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

# class Model


## Functions

### Model

```cpp
public void Model<ObjectType>(const Model<ObjectType> & )
```


### Model

```cpp
public void Model<ObjectType>(Model<ObjectType> && )
```


### operator=

```cpp
public Model<ObjectType> & operator=(const Model<ObjectType> & )
```


### operator=

```cpp
public Model<ObjectType> & operator=(Model<ObjectType> && )
```


### Model

```cpp
public void Model<ObjectType>()
```


### ~Model

```cpp
public void ~Model<ObjectType>()
```


### Model

```cpp
public void Model<ObjectType>(EnergyTermCollection<ObjectType> && energy_terms)
```


### nb_terms

```cpp
public index_t nb_terms()
```


### terms

```cpp
public const EnergyTermCollection<ObjectType> & terms()
```


### term_index

```cpp
public index_t term_index(const uuid & term_uuid)
```


### energy

```cpp
public const GibbsEnergy<ObjectType> & energy()
```


### compute_statistics

```cpp
public std::vector<double> compute_statistics(const ObjectSets<ObjectType> & state)
```


### compute_statistic

```cpp
public double compute_statistic(const ObjectSets<ObjectType> & state, const uuid & term_uuid)
```


### term_name

```cpp
public std::string term_name(const uuid & term_uuid)
```


### term_names

```cpp
public std::vector<std::string> term_names()
```


### string

```cpp
public std::string string()
```




