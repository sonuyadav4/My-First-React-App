import React from "react";

import { Stack, Text } from "components";

const DesktopOnePage = () => {
  return (
    <>
      <Stack className="bg-white_A700 font-inter h-[1024px] 2xl:h-[1025px] 3xl:h-[1230px] lg:h-[797px] xl:h-[911px] mx-[auto] lg:px-[53px] xl:px-[61px] px-[69px] 3xl:px-[82px] w-[100%]">
        <div className="absolute bg-black_900 lg:h-[265px] xl:h-[303px] h-[340px] 2xl:h-[341px] 3xl:h-[409px] right-[0] top-[25%] w-[82%]"></div>
        <Text className="absolute font-normal h-[max-content] inset-y-[0] my-[auto] not-italic right-[33%] lg:text-[37px] xl:text-[42px] text-[48px] 3xl:text-[57px] text-red_A700 w-[auto]">
          Sonu yadav
        </Text>
      </Stack>
    </>
  );
};

export default DesktopOnePage;
