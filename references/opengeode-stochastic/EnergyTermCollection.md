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

# class EnergyTermCollection


## Functions

### EnergyTermCollection

```cpp
public void EnergyTermCollection<ObjectType>(const EnergyTermCollection<ObjectType> & )
```


### operator=

```cpp
public EnergyTermCollection<ObjectType> & operator=(const EnergyTermCollection<ObjectType> & )
```


### EnergyTermCollection

```cpp
public void EnergyTermCollection<ObjectType>()
```


### EnergyTermCollection

```cpp
public void EnergyTermCollection<ObjectType>(EnergyTermCollection<ObjectType> && )
```


### ~EnergyTermCollection

```cpp
public void ~EnergyTermCollection<ObjectType>()
```


### operator=

```cpp
public EnergyTermCollection<ObjectType> & operator=(EnergyTermCollection<ObjectType> && )
```


### add_energy_term

```cpp
public uuid add_energy_term(std::unique_ptr<EnergyTerm<ObjectType>> && term)
```


### size

```cpp
public index_t size()
```


### get_term_index

```cpp
public index_t get_term_index(const uuid & term_uuid)
```


### get

```cpp
public const EnergyTerm<ObjectType> & get(const uuid & term_uuid)
```


### get_term_uuid

```cpp
public uuid get_term_uuid(std::string_view name)
```


### energy_terms

```cpp
public const std::vector<std::unique_ptr<EnergyTerm<ObjectType>>> & energy_terms()
```


### string

```cpp
public std::string string()
```




