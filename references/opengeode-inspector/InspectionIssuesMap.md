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

# class InspectionIssuesMap


## Functions

### InspectionIssuesMap

```cpp
public void InspectionIssuesMap<IssueType>(basic_string_view issue_description)
```


### InspectionIssuesMap

```cpp
public void InspectionIssuesMap<IssueType>()
```


### set_description

```cpp
public void set_description(basic_string_view issue_description)
```


### description

```cpp
public basic_string_view description()
```


### nb_issues

```cpp
public index_t nb_issues()
```


### add_issues_to_map

```cpp
public void add_issues_to_map(const uuid & id_to_issues, InspectionIssues<IssueType> issues)
```


### string

```cpp
public basic_string string()
```


### issues_map

```cpp
public const absl::flat_hash_map<uuid, InspectionIssues<IssueType> > & issues_map()
```




