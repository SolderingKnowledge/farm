import * as React from 'react';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { PivotItem,  Pivot } from 'office-ui-fabric-react/lib/Pivot';

const labelStyles = {
  root: { marginTop: 10 },
};
function _customRenderer(link, defaultRenderer){
  return (
    <span>
      {defaultRenderer(link)}
      <Icon iconName="Airplane" style={{ color: 'red' }} />
    </span>
  );
}
function Header() {
  return (
    <div>
    <Pivot aria-label="Count and Icon Pivot Example">
      <PivotItem headerText="My Files" itemCount={42} itemIcon="Emoji2">
        <Label styles={labelStyles}>Pivot #1</Label>
      </PivotItem>
      <PivotItem itemCount={23} itemIcon="Recent">
        <Label styles={labelStyles}>Pivot #2</Label>
      </PivotItem>
      <PivotItem headerText="Placeholder" itemIcon="Globe">
        <Label styles={labelStyles}>Pivot #3</Label>
      </PivotItem>
      <PivotItem headerText="Shared with me" itemIcon="Ringer" itemCount={1}>
        <Label styles={labelStyles}>Pivot #4</Label>
      </PivotItem>
      <PivotItem headerText="Customized Rendering" itemIcon="Globe" itemCount={10} onRenderItemLink={_customRenderer}>
        <Label styles={labelStyles}>Customized Rendering</Label>
      </PivotItem>
    </Pivot>
  </div>
    );
}
export default Header;