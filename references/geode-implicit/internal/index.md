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



## Records

* [BRepBlockImpliciter](BRepBlockImpliciter.md)
* [BlockImplicitInfo](BlockImplicitInfo.md)
* [CrossSectionSequenceImpliciter](CrossSectionSequenceImpliciter.md)
* [CutSolidGrid](CutSolidGrid.md)
* [CutSurfaceGridOutput](CutSurfaceGridOutput.md)
* [CutSurfaceGrid](CutSurfaceGrid.md)
* [DuplicatedCell2D](DuplicatedCell2D.md)
* [DuplicatedCell3D](DuplicatedCell3D.md)
* [ImplicitDataManager](ImplicitDataManager.md)
* [ImplicitSVGInput](ImplicitSVGInput.md)
* [ScalarFunctionComputer2D](ScalarFunctionComputer2D.md)
* [ScalarFunctionComputer3D](ScalarFunctionComputer3D.md)
* [SectionSurfaceImpliciter](SectionSurfaceImpliciter.md)
* [SingleSurfaceImplicitation](SingleSurfaceImplicitation.md)
* [StratigraphicLSOInput](StratigraphicLSOInput.md)
* [StructuralModelSequenceImpliciter](StructuralModelSequenceImpliciter.md)
* [SurfaceImplicitInfo](SurfaceImplicitInfo.md)
* [VTPCutSurfaceGridOutput](VTPCutSurfaceGridOutput.md)


## Functions

### save_cut_surface_grid

```cpp
vector save_cut_surface_grid(const CutSurfaceGrid & cut_surface_grid, basic_string_view filename)
```


 API function for saving a CutSurfaceGrid. The adequate saver is called depending on the given filename         extension.

**edged_curve** [in] CutSurfaceGrid to save.

**filename** [in] Path to the file where save the CutSurfaceGrid.

### is_cut_surface_grid_saveable

```cpp
bool is_cut_surface_grid_saveable(const CutSurfaceGrid & cut_surface_grid, basic_string_view filename)
```


### ordered_groups_of_horizons_to_implicit

```cpp
vector ordered_groups_of_horizons_to_implicit(const HorizonsStack<dimension> & horizons_stack)
```




